import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cast extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public character: string

  @column()
  public profilePath: string

  @column()
  public posterUrl: string
}
