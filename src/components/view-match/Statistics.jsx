import React from 'react'
import StatCard from './StatCard'



export default function Statistics() {
  return (
    <div>
      <StatCard homeValue = {8} awayValue = {8} type="Shots"/>
      <StatCard homeValue = {1} awayValue = {1} type="Corners"/>
      <StatCard homeValue = {8} awayValue = {12} type="Fouls"/>
      <StatCard homeValue = {15} awayValue = {10} type="Shots on target"/>


       
    </div>
  )
}
