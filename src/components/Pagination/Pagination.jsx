import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({page,handlePageChange}) {
 

  return (
    <div className='pagination-container'>
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={(event,value)=>handlePageChange(event,value)}
      sx={{
        color:"var(--white)","& .Mui-selected":{
            backgroundColor:"var(--blue) !important",
            color:"fff !important",
            borderTopColor:"var(--blue) !important"
        },
        "& .MuiPaginationItem-ellipsis":{
            border:"0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text":{
            color:"var(--white)",
            border:"1px solid var(--grey)",
        }
    }} />
    </Stack>
    </div>
  );
}


/* what our handle function which is located in parent componenet of this compoenet
i.e. dashboard does that 
whenever we click on next page the handlePageFunction run 
which will render the next 10 elements of the array we fetched and the page is changed 
actually the page is the same we just give illusion of page being changed

that is initially the first 10 coins are rendered on page 1 
and as soon as the user click on the next page the onchange function runs and 
next 10 coins are rendered to achive this the onchange function runs as follows

first we have a usestate which maintains setof 10 coins to render on a page
i.e. 
const  [paginatedCoins,setPaginatedCoins] = useState([])

then we  captures the previous page index  for eg

lets say page 1 which already had rendered
elements from 0 to 9
so to render next we click on page 2 

after clicking that the handlePageChange function runs with 2 arguments given by MUI componenet
event and value here value is nothing but the current page i.e. //2
so now to render next 10 set of elements
we first calculate previousIndex 

prevIndex = value - 1 *10 (this value is the currentPageNumber i.e. 2)
prevIndex = 2 - 1 * 10   ==> 10

so we render the next setofCoins as 
setPaginatedCoins(coins.slice(prevIndex,prevIndex+10))  // setPaginatedCoins(coins.slice(10,20))

if(page =3) 
value =3
previndex = 3 -1 * 10
previndex = 20
setpaginatedCoins(coins.slice(20,30)) ==> coins from index 20 to 29

*/