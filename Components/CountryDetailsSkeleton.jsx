import React from 'react'
import s from './Skeleton.module.css'

/* Width percentages for the two info columns — mimic real label+value rows */
const leftColWidths  = [72, 58, 44, 62, 38]
const rightColWidths = [55, 68, 60]

const CountryDetailsSkeleton = () => (
  <div className={s['detail-container']} aria-hidden="true">
    {/* Back button ghost */}
    <div className={`${s['detail-back']} ${s.base}`} />

    <div className={s['detail-row']}>
      {/* Flag placeholder */}
      <div className={`${s['detail-flag']} ${s.base}`} />

      {/* Info block */}
      <div className={s['detail-info']}>
        {/* Country name */}
        <div className={`${s['detail-name']} ${s.base}`} />

        {/* Two info columns */}
        <div className={s['detail-columns']}>
          <div className={s['detail-col']}>
            {leftColWidths.map((w, i) => (
              <div
                key={i}
                className={`${s['detail-col-line']} ${s.base}`}
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          <div className={s['detail-col']}>
            {rightColWidths.map((w, i) => (
              <div
                key={i}
                className={`${s['detail-col-line']} ${s.base}`}
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>

        {/* Border country tags */}
        <div className={s['detail-borders']}>
          <div className={`${s['detail-borders-label']} ${s.base}`} />
          {[1, 2, 3].map((i) => (
            <div key={i} className={`${s['detail-tag']} ${s.base}`} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default CountryDetailsSkeleton
