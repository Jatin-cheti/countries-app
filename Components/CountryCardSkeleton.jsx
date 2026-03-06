import React from 'react'
import s from './Skeleton.module.css'

const CountryCardSkeleton = () => (
  <div className={s['card-link']} aria-hidden="true">
    <div className={s.card}>
      <div className={`${s['card-img']} ${s.base}`} />
      <div className={s['card-body']}>
        <div className={`${s['card-title']} ${s.base}`} />
        <div className={`${s['card-line']} ${s['w-75']} ${s.base}`} />
        <div className={`${s['card-line']} ${s['w-60']} ${s.base}`} />
        <div className={`${s['card-line']} ${s['w-50']} ${s.base}`} />
      </div>
    </div>
  </div>
)

export default CountryCardSkeleton
