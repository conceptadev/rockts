import { Entity } from './Entity'
import Ajv from 'ajv'

const ajv = new Ajv()
// TODO: Implement ajv validation

export interface Type<T extends Entity<any>> extends Function {
  new (...args: any[]): T
}

export class Mapper {
  // TODO: Set DTO to be of type DTO and create base class
  static fromDto<T extends Entity<any>>(entity: Type<T>, dto: any) {
    const instance = Object.create(entity.prototype)
    instance.props = dto
    instance._id = dto.id
    return instance as T
  }

  static fromJson<T extends Entity<any>>(entity: Type<T>, json: string) {
    return Mapper.fromDto<T>(entity, JSON.parse(json))
  }

  static toDto<T>(entity: any) {
    return entity.getProps() as T
  }

  static toJson<T>(entity: any) {
    const dto = Mapper.toDto<T>(entity)
    return JSON.stringify(dto)
  }
}
