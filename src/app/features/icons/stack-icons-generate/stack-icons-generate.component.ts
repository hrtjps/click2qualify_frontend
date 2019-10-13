import { Component, OnInit, ChangeDetectionStrategy, Pipe, PipeTransform, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

interface StackIcon {
  items: StackItem[];
}

interface StackItem {
  icon: string;
  prefix: string;
  color: string;
  size: number;
  opacity: number;
  animated: boolean;
  rotation: string;
  collapsed: boolean;
}

interface StackListOption {
  title: string;
  value: string | number | boolean;
}

@Component({
  selector: 'smart-stack-icons-generate',
  templateUrl: './stack-icons-generate.component.html',
  styleUrls: [
    '../../../../scss/_webfonts/fontawesome-pro-master/scss/fa-brands.scss',
    '../../../../scss/_webfonts/fontawesome-pro-master/scss/fa-regular.scss',
    '../../../../scss/_webfonts/fontawesome-pro-master/scss/fa-solid.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackIconsGenerateComponent implements OnInit {

  currentIcon: StackIcon = {
    items: [
      {
        icon: 'fa-car', prefix: 'fal', color: 'white', size: 1,
        opacity: 100, animated: false, rotation: '', collapsed: true
      },
      {
        icon: 'base-7', prefix: 'base', color: 'primary-300', size: 2,
        opacity: 100, animated: false, rotation: '', collapsed: true
      },
      {
        icon: 'base-7', prefix: 'base', color: 'primary-500', size: 3,
        opacity: 100, animated: false, rotation: '', collapsed: true
      },
    ]
  };

  layers = 3;
  prefixes = ['base', 'fal', 'fas', 'far', 'fab', 'ni'];
  iconSizes = [3, 2, 1];
  rotations: StackListOption[] = [
    { title: 'No rotation', value: '' },
    { title: 'Rotate 90', value: 'fa-rotate-90' },
    { title: 'Rotate 180', value: 'fa-rotate-180' },
    { title: 'Rotate 270', value: 'fa-rotate-270' },
    { title: 'Flip horizontal', value: 'fa-flip-horizontal' },
    { title: 'Flip vertical', value: 'fa-flip-vertical' },
  ];
  layersOptions: StackListOption[] = [
    { title: 'Two layers', value: 2 },
    { title: 'Three layers', value: 3 },
    { title: 'Four layers', value: 4 },
    { title: 'Five layers', value: 5 },
    { title: 'Six layers', value: 6 },
    { title: 'Seven layers', value: 7 },
  ];
  nextGenColors: string[];

  icons: { [key: string]: StackListOption[] } = {
    base: [],
    fa: [],
    fab: [],
    ni: [],
  };

  @ViewChild('generatedStackOutput', { static: true }) generatedStackOutput: ElementRef;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.icons.base = this.route.snapshot.data.icons.nextGenBase.reverse()
      .map((icon: string) => ({
        value: icon,
        title: icon
      }));
    this.icons.fa = this.route.snapshot.data.icons.fontAwesomeList
      .map((icon: string) => ({
        value: `fa${icon}`,
        title: icon.substring(1)
      }));
    this.icons.fab = this.route.snapshot.data.icons.fontAwesomeBrands
      .map((icon: string) => ({
        value: `fa${icon}`,
        title: icon.substring(1)
      }));
    this.icons.ni = this.route.snapshot.data.icons.nextGenList
      .map((icon: string) => ({
        value: `ni${icon}`,
        title: icon.substring(1)
      }));
    this.nextGenColors = this.route.snapshot.data.icons.nextGenColors
      .map((icon: string) => icon.replace(/^color-/, ''));
  }

  drop($event: CdkDragDrop<StackItem[]>) {
    moveItemInArray(this.currentIcon.items, $event.previousIndex, $event.currentIndex);
  }

  onLayerChange($event: number) {
    this.layers = $event;
    const diff = $event - this.currentIcon.items.length;
    if (diff > 0) {

      for (let i = 0; i < diff; i++) {
        this.currentIcon.items.unshift({
          icon: 'base-1', prefix: 'base', color: 'white', size: 1,
          opacity: 100, animated: false, rotation: '', collapsed: true
        });
      }
    } else if (diff < 0) {
      this.currentIcon.items = this.currentIcon.items.slice(0, $event);
    }
  }

  onCopyIcon() {
    const pipe = new StackIconClassesPipe();
    const value = `<div class="icon-stack">\n${
      this.currentIcon.items.slice().reverse().map(
        (item: StackItem) => `  <i class="` + pipe.transform(item) + '"></i>\n'
      ).join('')
    }</div>`;
    this.generatedStackOutput.nativeElement.value = value;
    this.generatedStackOutput.nativeElement.select();
    document.execCommand('copy');
  }
}

@Pipe({
  pure: false,
  name: 'stackIconClasses'
})
export class StackIconClassesPipe implements PipeTransform {
  transform(item: StackItem): string {
    return `${item.prefix} ${item.icon} icon-stack-${item.size}x opacity-${
      item.opacity} color-${item.color} ${item.animated ? 'fa-spin' : ''} ${item.rotation}`.trim();
  }
}
