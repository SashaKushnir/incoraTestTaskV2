import React from 'react'
import fetchingImg from '../../images/kto-pridumal-indikator-vypolneniya-7.gif'
import s from './FetchingComponent.module.css'

export const FetchingComponent = () => {
    return <img className={s.toCenter} src={fetchingImg} alt="Fetching data"/>
}