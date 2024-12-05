import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Input,
  Avatar,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useGetAllNoticeQuery } from "../../Api/noticeApi";
import { useSelector } from "react-redux";
import { imageUrl } from "../../constant/constant";


const Notice =()=> {
  const {user} = useSelector((state)=>state.userSlice)
  const {data} = useGetAllNoticeQuery();
  console.log(data);
const nav = useNavigate();
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h1 className="uppercase font-bold text-2xl">Notice List</h1>
           
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            {user?user.isAdmin? <Button onClick={()=>nav('/addnotice')} className="flex items-center bg-primary gap-3" size="sm">
            Add Notice
            </Button>:"":""}
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-2 ">
      <table className="w-full  min-w-max table-auto text-left">
              <thead className="bg-blue-gray-400 text-white  uppercase">
              
                <tr className="">
                  <th>S.N</th>
                  <th>Title</th>
                  <th>Detail</th>
                 {user? user.isAdmin ? <th className="pl-1">Edit</th>:<th>Uploaded By</th>:<th>Uploaded By</th>}
                 {user? user.isAdmin ? <th>Delete</th>:  <th>Created At</th>:<th>Created At</th>}
                 <th>File</th>
                </tr>
              </thead>
            {data?.data?.map(({notice_sn,notice_title,notice_detail,notice_uploadedBy,notice_file,i})=>{
              return <tbody>
              <tr key={i}>
                <td>{notice_sn}</td>
                <td>{notice_title}</td>
                <td>{notice_detail}</td>
               {user?user.isAdmin ?<td><Button className="my-2" color="light-green" size="sm">Edit</Button></td>
                : "":""}
                {user?user.isAdmin ?
                <td><Button className="my-2" color="red" size="sm">Delete</Button></td>: "":""}
                <td >
                    <Avatar src={`${imageUrl}${notice_file}`} alt="File" />
                  </td>
              </tr>
              </tbody>
           
            })}
     </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 px-10 py-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Notice