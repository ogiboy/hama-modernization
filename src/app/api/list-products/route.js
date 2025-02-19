import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-static'

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      'src/app/lib/products-categorized.json'
    )

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Dosya okunamadı' }, { status: 500 })
  }
}
