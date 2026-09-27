import React from 'react'
import PurchsesText from './PurchsesText'
import PurchsesItems from './PurchsesItems'

const PurchasesProduct = () => {
  return (
        <div className="product flex-1 flex flex-col gap-[4rem] max-lg:pl-[20%] max-lg:pr-[20%] max-md:pr-[10%] max-md:pl-[10%] max-sm:pr-[0] max-lg:pl-[0]">
            <PurchsesText />
            <PurchsesItems />
          </div>
  )
}

export default PurchasesProduct