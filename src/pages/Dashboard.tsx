
import { useState } from "react";
import { Plus, Home, QrCode, Settings, Edit, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import AddPropertyForm from "@/components/AddPropertyForm";
import EditPropertyForm from "@/components/EditPropertyForm";

const Dashboard = () => {
  // Mock properties data - will be replaced with Supabase data
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Cozy Beach House",
      location: "Malibu, CA",
      status: "active",
      qrGenerated: true,
      guests: 12
    },
    {
      id: 2,
      name: "Mountain Cabin Retreat",
      location: "Aspen, CO",
      status: "active",
      qrGenerated: false,
      guests: 8
    },
    {
      id: 3,
      name: "Downtown Loft",
      location: "New York, NY",
      status: "inactive",
      qrGenerated: true,
      guests: 25
    }
  ]);

  const [editingProperty, setEditingProperty] = useState(null);

  const handleAddProperty = (newProperty: any) => {
    setProperties(prev => [...prev, newProperty]);
  };

  const handleEditProperty = (updatedProperty: any) => {
    setProperties(prev => 
      prev.map(prop => 
        prop.id === updatedProperty.id ? updatedProperty : prop
      )
    );
    setEditingProperty(null);
  };

  const handleDeleteProperty = (propertyId: number) => {
    setProperties(prev => prev.filter(prop => prop.id !== propertyId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Properties</h1>
              <p className="text-gray-600 mt-2">Manage your Airbnb properties and AI assistants</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Link to="/#pricing">
              <Button variant="outline" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                View Pricing
              </Button>
            </Link>
            <AddPropertyForm onAddProperty={handleAddProperty} />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Properties</CardDescription>
              <CardTitle className="text-2xl">{properties.length}</CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Properties</CardDescription>
              <CardTitle className="text-2xl">
                {properties.filter(p => p.status === 'active').length}
              </CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>QR Codes Generated</CardDescription>
              <CardTitle className="text-2xl">
                {properties.filter(p => p.qrGenerated).length}
              </CardTitle>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Interactions</CardDescription>
              <CardTitle className="text-2xl">
                {properties.reduce((sum, p) => sum + p.guests, 0)}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{property.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Home className="w-4 h-4 mr-1" />
                      {property.location}
                    </CardDescription>
                  </div>
                  <Badge 
                    variant={property.status === 'active' ? 'default' : 'secondary'}
                    className={property.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                  >
                    {property.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">QR Code</span>
                    <div className="flex items-center">
                      <QrCode className={`w-4 h-4 mr-1 ${property.qrGenerated ? 'text-green-600' : 'text-gray-400'}`} />
                      <span className={`text-sm ${property.qrGenerated ? 'text-green-600' : 'text-gray-400'}`}>
                        {property.qrGenerated ? 'Generated' : 'Not generated'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Guest Interactions</span>
                    <span className="text-sm font-medium">{property.guests}</span>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setEditingProperty(property)}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <QrCode className="w-4 h-4 mr-1" />
                      QR Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-red-600 hover:text-red-700"
                      onClick={() => handleDeleteProperty(property.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {editingProperty && (
        <EditPropertyForm 
          property={editingProperty}
          onEditProperty={handleEditProperty}
          onClose={() => setEditingProperty(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
