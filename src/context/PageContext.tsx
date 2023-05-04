// import {createContext, useState, SetStateAction} from 'react'

// type Props = {
//   children: JSX.Element
// }

// interface IPageContext {
//   page: number
//   setPage: React.Dispatch<SetStateAction<number>>
// }

// export const PageContext = createContext<IPageContext>({} as IPageContext)

// export const PageProvider = ({children}:Props) => {
//   const [page, setPage] = useState<number>(1)

//   const sharedData: IPageContext = {
//     page,
//     setPage
//   }

//   return(
//     <PageContext.Provider value={sharedData}>
//       {children}
//     </PageContext.Provider>
//   )
// }
