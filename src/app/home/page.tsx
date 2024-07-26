"use client";

import NFTCard from "@/components/NFTCard";
import { useEffect, useState } from "react";
import NFTModal1 from "@/jsons/1.json";
import NFTModal2 from "@/jsons/2.json";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getGeneratedImages } from "@/utils/imageGenerator";

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imageList, setImageList] = useState<any[]>([]);
  const totalPages = 3;

  useEffect(() => {
    async function fetchImageList() {
      const readCount = 30;
      try {
        let imageList = [];
        let imageBianary = await getGeneratedImages();
        // const imageArr = Object.values(files);
        console.log(imageBianary)
        if (imageBianary.length > 0) {
            // @ts-ignore
          for (let imageInfo of imageBianary) {
            console.log(imageInfo)
            // setImageList(imageInfo);
            // imageList.push(`data:image/png;base64,${imageInfo}`);

            // if (imageList.length == readCount) break;
          }
        }
        setImageList(imageList);
      } catch (error) {
        console.error("Error fetching preprocessed data:", error);
      }
    }
    fetchImageList();
  }, []);


  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        <NFTCard
          data={[NFTModal1, NFTModal2][currentPage - 1].data}
          mainHash={""}
          targetVector={""}
          targethash={""}
        />
        <Pagination total={totalPages}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                //@ts-ignore
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => handlePageChange(i + 1)}
                  className={currentPage === i + 1 ? "active" : ""}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                //@ts-ignore
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default page;
