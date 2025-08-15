'use client'

import Image from 'next/image'
import portfolioItems from './portfolioItems'
import { AlertTriangle } from 'lucide-react'

export default function PortfolioContent() {
  return (
    <section className="space-y-16 px-6 py-20 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold tracking-tight">Наші роботи</h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        Приклади друку, вишивки та шовкографії, які ми виконували для клієнтів.
      </p>
        {/* Alert Block */}
      <div className="mx-auto my-12 max-w-xl rounded-lg border border-yellow-400 bg-yellow-50 p-6 text-center shadow-sm animate-pulse">
      <div className="flex items-center justify-center gap-2 text-yellow-700">
        <AlertTriangle className="h-5 w-5" />
        <span className="font-semibold text-lg">Сторінка в розробці</span>
      </div>
      <p className="mt-2 text-sm text-yellow-800">
        Ми ще працюємо над галереєю прикладів. <br></br>
        Скоро тут буде більше вишивки, DTF друку та шовкографії.
      </p>
    </div>

        {/* Alert Block END */}

      {portfolioItems.map((section) => (
        <div key={section.category} className="space-y-6">
          <h2 className="text-2xl font-semibold">{section.category}</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {Array.isArray(section.images) &&
              section.images.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border group relative aspect-[3/2]"
                >
                  <Image
                    src={src}
                    alt={`${section.category} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  )
}
