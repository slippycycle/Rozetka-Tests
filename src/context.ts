import React from "react"

type MobileSortActiveType = {
    active: boolean,
    
} 

export const MobileSortActive = React.createContext<any>(null)

export const MenuContext = React.createContext<any>(null)

export const RangePriceContext = React.createContext<any>(null)

export const AllBrandsContex = React.createContext<any>(null)

export const SelectedSubPageContext = React.createContext<any>(null)

export const MessageContext = React.createContext<any>(null)

export const CountContext = React.createContext<any>(null)

export const CatroryVisibleContext = React.createContext<boolean | null>(null)

export const CatergoryContext = React.createContext<any>(null)