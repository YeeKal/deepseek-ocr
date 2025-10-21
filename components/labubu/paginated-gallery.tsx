"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginatedGalleryProps {
  wallpaperN: number;
  itemsPerPage?: number;
}

export default function PaginatedGallery ({ 
  wallpaperN, 
  itemsPerPage = 8 
}: PaginatedGalleryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentPage = Number(searchParams.get("page") || "1");
  const totalPages = Math.ceil(wallpaperN / itemsPerPage);
  
  
  const createQueryString = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return params.toString();
  };
  
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    router.push(`?${createQueryString(page)}`);
  };
  
  return (
    <div>
      
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}