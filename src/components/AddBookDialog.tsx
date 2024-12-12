import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { PlusCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import AddBookForm from './AddBookForm'

const AddBookDialog: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-gray-600 hover:text-gray-900 transition-colors">
          <PlusCircle className="h-4 w-4 mr-2 text-cyan-400" />
          Add Book
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a New Book</DialogTitle>
          <DialogDescription>
            Enter the details of the book you want to add to your library.
          </DialogDescription>
        </DialogHeader>
        <AddBookForm onClose={handleCloseDialog}/>
      </DialogContent>
    </Dialog>
  )
}

export default AddBookDialog

