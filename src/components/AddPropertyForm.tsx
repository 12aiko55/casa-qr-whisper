
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

interface AddPropertyFormProps {
  onAddProperty: (property: any) => void;
}

const AddPropertyForm = ({ onAddProperty }: AddPropertyFormProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    status: true, // true = active, false = inactive
    generateQR: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProperty = {
      id: Date.now(), // Simple ID generation for demo
      name: formData.name,
      location: formData.location,
      description: formData.description,
      status: formData.status ? "active" : "inactive",
      qrGenerated: formData.generateQR,
      guests: 0
    };

    onAddProperty(newProperty);
    
    // Reset form and close dialog
    setFormData({
      name: "",
      location: "",
      description: "",
      status: true,
      generateQR: false
    });
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
          <DialogDescription>
            Create a new Airbnb property and set up its AI assistant.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="property-name">Property Name</Label>
            <Input
              id="property-name"
              placeholder="e.g., Cozy Beach House"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="property-location">Location</Label>
            <Input
              id="property-location"
              placeholder="e.g., Malibu, CA"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="property-description">Description (Optional)</Label>
            <Textarea
              id="property-description"
              placeholder="Brief description of your property..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={3}
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="active-status"
                checked={formData.status}
                onCheckedChange={(checked) => handleInputChange("status", checked as boolean)}
              />
              <Label htmlFor="active-status">Set as active property</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="generate-qr"
                checked={formData.generateQR}
                onCheckedChange={(checked) => handleInputChange("generateQR", checked as boolean)}
              />
              <Label htmlFor="generate-qr">Generate QR code immediately</Label>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700"
            >
              Add Property
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPropertyForm;
