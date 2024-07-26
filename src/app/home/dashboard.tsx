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

const Dashboard = () => {
  const [imageList, setImageList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(5);

  const pageCount = 12;
  const maxVisiblePages = 5;

  useEffect(() => {
    async function fetchImageList() {
      try {
        let {totalCount, nftList} = await getGeneratedImages(currentPage, pageCount);
        const totalPage = Math.ceil(totalCount / pageCount);

        setImageList(nftList);
        setTotalPages(totalPage);

        if (totalCount > 0) {
          const halfVisiblePages = Math.floor(maxVisiblePages / 2);
          let start = currentPage - halfVisiblePages;
          let end = currentPage + halfVisiblePages;
          console.log(start)
          console.log(end)
  
          if (start < 1) {
            start = 1;
            end = Math.min(maxVisiblePages, totalPage);
          } else if (end > totalPage) {
            end = totalPage;
            start = Math.max(1, totalPage - maxVisiblePages + 1);
          }
          console.log(start)
          console.log(end)
  
          setStartPage(start);
          setEndPage(end);
        }
      } catch (error) {
        console.error("Error fetching preprocessed data:", error);
      }
    }
    fetchImageList();
  }, [currentPage]);


  const handlePageChange = (pageNumber: any) => {
    const newPage = Math.max(1, Math.min(totalPages, pageNumber));
    setCurrentPage(newPage);
  };

  return (
    <>
      <div>
        <NFTCard data={imageList} />
        <Pagination total={totalPages}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                //@ts-ignore
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => i + startPage).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "active" : ""}
                >
                  {page}
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

export default Dashboard;
