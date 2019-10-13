import { Component, OnInit, Input, Attribute, OnChanges, SimpleChanges, ElementRef, Renderer2, ContentChild } from '@angular/core';
import { makeSlideInOut } from '../../utils/animations';
import { handleClassCondition } from '../../utils/utils.functions';
import { DialogsService } from '../../dialogs/dialogs.service';

@Component({
  selector: 'smart-panel',
  templateUrl: './panel.component.html',
  animations: [makeSlideInOut()],
})
export class PanelComponent implements OnInit, OnChanges {

  hasPannel = false;
  @Input() collapsible = false;
  @Input() collapsed = false;
  @Input() fullscreenable = false;
  @Input() fullscreenIn: boolean;
  @Input() clossable: boolean;
  @Input() closed: boolean;
  headerClass: string;

  @ContentChild('panelTitle', { static: true }) panelTitle;
  constructor(
    @Attribute('headerClass') headerClass: string,
    private dialogs: DialogsService,
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.headerClass = headerClass;
  }

  ngOnInit() {
    if (typeof this.collapsed !== 'undefined') {
      this.collapsible = true;
    }
    if (typeof this.fullscreenIn !== 'undefined') {
      this.fullscreenable = true;
    }
    if (typeof this.closed !== 'undefined') {
      this.clossable = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(22, changes);
    // if (typeof changes.fullscreenIn !== 'undefined') {
    //   console.log('111', changes.fullscreenIn.currentValue, this.fullscreenable);
    // }
  }

  get pannelClasses() {
    const classes = ['panel'];
    classes.push(this.collapsed ? 'panel-collapsed' : '');
    classes.push(this.fullscreenIn ? 'panel-fullscreen' : '');
    return classes;
  }

  get pannelContainerClasses() {
    const classes = ['panel-container'];
    if (this.collapsible) {
      // classes.push(this.collapsed ? 'collapse' : 'show');
      classes.push(this.collapsed ? '' : 'show');
    }
    return classes;
  }

  get pannelContentClasses() {
    const classes = ['panel-content'];
    return classes;
  }

  toggleCollapse($event: MouseEvent) {
    $event.preventDefault();
    this.collapsed = !this.collapsed;
  }
  toggleFullscreen($event: MouseEvent) {
    $event.preventDefault();
    this.fullscreenIn = !this.fullscreenIn;
    handleClassCondition(this.fullscreenIn, 'panel-fullscreen', document.querySelector('body'));
  }
  async closePanel($event: MouseEvent) {
    $event.preventDefault();
    const titleEl = this.el.nativeElement.querySelector('h1')
      || this.el.nativeElement.querySelector('h2')
      || this.el.nativeElement.querySelector('h3');

    const title = titleEl ? titleEl.innerText : '';

    const result = await this.dialogs.confirm({
      title: `<i class='fal fa-times-circle text-danger mr-2'></i>
      Do you wish to delete panel <span class='fw-500'>&nbsp;'${title}'&nbsp;</span>?`,
      message: `<span><strong>Warning:</strong> This action cannot be undone!</span>`,
      buttons: {
        confirm: {
          label: 'Yes',
          className: 'btn-danger shadow-0'
        },
        cancel: {
          label: 'No',
          className: 'btn-default'
        }
      }
    }).toPromise();

    if (result) {
      this.renderer.addClass(this.el.nativeElement, 'd-none');
    }

  }

  setHeaderClass(headerClass: string) {
    this.headerClass = headerClass;
  }
}


/**
 * spec
 * + it should have multiple content projections
 * + it should have tooltips on feature buttons
 * it should be able to disable all features
 * it should save options to local storage
 *         closed
 * + it should wrap header
 * + it should be closable
 * + it should warn on close
 * + it should be fullscrinable
 * +       toggle class .panel-fullscreen on :host element
 * +       toggle class .panel-fullscreen on body element
 * + it should be collapsable
 * +       animated collapse
 * +       toggle class .panel-collapsed on :host element
 * +       toggle class .collapse .show  on .panel-container element
 * it should be lockable *
 *        toggle class .panel-locked on :host element
 * + it should be able to change colors // styles
 * +       .panel-hdr
 * it should have loading indicator/state
 *         have runLoader()
 * it should be able to run refresh state
 *        toggle class .panel-refresh on :host element
 *        toggle class .enable-loader on .panel-container element
 * + it should be able to accept custom  buttons
 * it should be sortable
 *    toggle class .panel-sortable on :host element
 *   dragging
 *    placeholder .panel-placeholder
 *    drag handle > .panel-hdr > h2
 * it should remeber position
 * it should emit callbacks
 * it should be able to reset
 *    all widgets
 *    all widgets settings
 *    all widgets positions
 *    widget settings
 *    widget position
 * it should be destroyable
 * alert if no id
 * it should add propper roles
 *
 * dependencies
 *    ngx-bootstrap/modal
 *    ngx-bootstrap/dropdown
 *    ngx-bootstrap/tooltip
 *    cdk/drag-ndrop
 */


