const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity
}

export type UniqueEntityID = string | number

export abstract class Entity<T> {
  protected static readonly schema: EntitySchema
  protected readonly _id: UniqueEntityID
  protected props: T
  constructor(id: UniqueEntityID, props: T) {
    this._id = id
    this.props = props
  }

  getId() {
    return this._id
  }

  getProps() {
    return this.props
  }

  public equals(object?: Entity<T>): boolean {
    if (!object) {
      return false
    }

    if (this === object) {
      return true
    }

    if (!isEntity(object)) {
      return false
    }

    return this._id === object.getId()
  }
}
