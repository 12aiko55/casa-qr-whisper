
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
} from "@/components/ui/dialog";

interface EditPropertyFormProps {
  property: any;
  onEditProperty: (property: any) => void;
  onClose: () => void;
}

const EditPropertyForm = ({ property, onEditProperty, onClose }: EditPropertyFormProps) => {
  const [formData, setFormData] = useState({
    name: property.name,
    location: property.location,
    description: property.description || "",
    status: property.status === "active",
    qrGenerated: property.qrGenerated
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const updatedProperty = {
      ...property,
      name: formData.name,
      location: formData.location,
      description: formData.description,
      status: formData.status ? "active" : "inactive",
      qrGenerated: formData.qrGenerated
    };

    onEditProperty(updatedProperty);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Property</DialogTitle>
          <DialogDescription>
            Update your property information and settings.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="edit-property-name">Property Name</Label>
            <Input
              id="edit-property-name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="edit-property-location">Location</Label>
            <Input
              id="edit-property-location"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="edit-property-description">Description</Label>
            <Textarea
              id="edit-property-description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={3}
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="edit-active-status"
                checked={formData.status}
                onCheckedChange={(checked) => handleInputChange("status", checked as boolean)}
              />
              <Label htmlFor="edit-active-status">Active property</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="edit-qr-generated"
                checked={formData.qrGenerated}
                onCheckedChange={(checked) => handleInputChange("qrGenerated", checked as boolean)}
              />
              <Label htmlFor="edit-qr-generated">QR code generated</Label>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPropertyForm;
