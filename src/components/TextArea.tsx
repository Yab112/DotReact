import React from 'react'

interface TextArea {
    src: string;
    alt: string;
    width: number;
    height: number;
    title: string;
    description: string;
    category: string;
  }

const TextArea = (props: TextArea) => {
  return (
    <div>TextArea</div>
  )
}