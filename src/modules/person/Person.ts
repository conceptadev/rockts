import { Entity, UniqueEntityID } from '../../core/Entity'
import { PersonSchema } from './PersonSchema'
import personJSONSchema from '../../schemas/person-schema.json'

export class Person extends Entity<PersonSchema> {}
