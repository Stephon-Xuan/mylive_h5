 
 import { ListCard } from '../ListCard/ListCard'
 
 export const ListShow = (props) =>{
     const { listData } = props
       
    if (!listData || listData.length === 0) {
        return null
    }

    return (<div>
        {
            listData.map((item,index) =>{
                return <div key={index}>
                        <ListCard listItem={item}></ListCard>   
                        </div>
            })
        }
    </div>)
}