/**
 * Record<Keys,Type>
 * 对象的【key的类型校验】 + 【value类型校验】
 * npx ts-node object.ts
*/
interface CatInfo {
  age: number
  breed: string
}
type CatName = 'miffy' | 'boris' | 'mordred'

const cats: Record<CatName, CatInfo> = {
    miffy: {age: 10, breed: 'Persian'},
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" }
}

console.log(cats.miffy)