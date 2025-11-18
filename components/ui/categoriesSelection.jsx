import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { categories } from "@/constant"


import React from 'react'

const CategoriesSelection = () => {
  return (
      <Select>
          <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categories" />
          </SelectTrigger>
          <SelectContent>
              {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                      {category}
                  </SelectItem>
              ))}
          </SelectContent>
      </Select>
  )
}

export default CategoriesSelection