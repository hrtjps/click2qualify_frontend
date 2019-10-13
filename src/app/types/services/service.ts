import {IPort} from './port'
import {IEnv} from './env'
import {ISecretKey} from './secretKey'
import {IContainer} from './../containers/container'

export interface IService {
  id: string
  name: string
  thumbnail: string
  ports: IPort[]
  version: string
  type: string
  description?: string
  secretKeys?: ISecretKey[]
  envs?: IEnv[]
  containers?: IContainer
}