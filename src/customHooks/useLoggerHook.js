import React, { useState, useEffect } from 'react'

export default function useLoggerHook (key, value) {
  useEffect(() => {
    console.log(key, value)
  }, [value])
}