 import { useState, useMemo } from "react";
 import { Button } from "@/components/ui/button";
 import { useChatConfig } from "@/context/ChatConfigContext";
 import { useIsMobile } from "@/hooks/use-mobile";
 import { cn } from "@/lib/utils";
 
 interface CategorizedQuickActionsProps {
   onSelect: (message: string) => void;
 }
 
 const CategorizedQuickActions = ({ onSelect }: CategorizedQuickActionsProps) => {
   const { categories } = useChatConfig();
   const isMobile = useIsMobile();
   
   const [activeCategory, setActiveCategory] = useState<string>(() => 
     categories?.[0]?.title ?? ""
   );
 
   const activeQuestions = useMemo(() => {
     const category = categories?.find((c) => c.title === activeCategory);
     return category?.questions ?? [];
   }, [categories, activeCategory]);
 
   if (!categories || categories.length === 0) {
     return null;
   }
 
   const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
     const value = e.target.value;
     if (value) {
       onSelect(value);
       // Reset dropdown to placeholder after selection
       e.target.value = "";
     }
   };
 
   return (
     <div className="flex flex-col w-full">
       {/* Category Tabs */}
        <div className="flex justify-center border-b border-border overflow-x-auto scrollbar-hide">
         {categories.map((category) => (
           <button
             key={category.title}
             type="button"
             onClick={() => setActiveCategory(category.title)}
             className={cn(
               "px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
               "border-b-2 -mb-px flex-shrink-0",
               activeCategory === category.title
                 ? "border-primary text-primary"
                 : "border-transparent text-muted-foreground hover:text-foreground"
             )}
           >
             {category.title.toUpperCase()}
           </button>
         ))}
       </div>
 
       {/* Questions - Chips on desktop, Dropdown on mobile */}
       <div className="p-4">
         {isMobile ? (
           <select
             onChange={handleDropdownChange}
             defaultValue=""
             className="w-full px-4 py-3 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
           >
             <option value="" disabled>
               Select a question...
             </option>
             {activeQuestions.map((question) => (
               <option key={question} value={question}>
                 {question}
               </option>
             ))}
           </select>
         ) : (
          <div className="flex flex-wrap gap-2 justify-center">
             {activeQuestions.map((question) => (
               <Button
                 key={question}
                 variant="outline"
                 size="sm"
                 onClick={() => onSelect(question)}
                 className="rounded-full border-primary/30 bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors h-auto py-2 px-3"
               >
                 {question}
               </Button>
             ))}
           </div>
         )}
       </div>
     </div>
   );
 };
 
 export default CategorizedQuickActions;
