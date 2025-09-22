import { useState, useCallback } from "react";
import { Upload, FileText, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

export default function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const handleFile = (selectedFile: File) => {
    if (selectedFile.type !== "text/csv") {
      toast({
        title: "Invalid file type",
        description: "Please upload a CSV file",
        variant: "destructive",
      });
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 10MB",
        variant: "destructive",
      });
      return;
    }

    setFile(selectedFile);
    toast({
      title: "File uploaded successfully",
      description: `${selectedFile.name} is ready for analysis`,
    });
  };

  const loadSampleData = () => {
    toast({
      title: "Sample data loaded",
      description: "You can now view the analytics dashboard with sample data",
    });
    // In a real app, this would load actual sample data
  };

  return (
    <section id="upload-section" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-text text-transparent bg-clip-text">
            Upload Your Customer Data
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Upload a CSV file containing your customer data to start generating insights and segments
        </p>

        <div
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            isDragging
              ? "border-primary bg-primary/10"
              : "border-border/50 hover:border-primary/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".csv"
            onChange={handleFileSelect}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className="space-y-4">
            {file ? (
              <>
                <FileText className="w-16 h-16 text-primary mx-auto" />
                <div>
                  <p className="text-lg font-semibold text-foreground">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </>
            ) : (
              <>
                <Upload className="w-16 h-16 text-muted-foreground mx-auto" />
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Drag & Drop your CSV file
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or click to browse your files
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertCircle className="w-4 h-4" />
            <span>Supported format: CSV</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <AlertCircle className="w-4 h-4" />
            <span>Maximum file size: 10MB</span>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">Don't have data? Try our sample dataset:</p>
          <Button variant="outline" onClick={loadSampleData}>
            Load Sample Data
          </Button>
        </div>
      </div>
    </section>
  );
}