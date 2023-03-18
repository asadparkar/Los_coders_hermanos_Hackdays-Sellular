import { FormDialog } from '@saas-ui/modals'
import { Field, FormLayout } from '@saas-ui/forms'
import { useDisclosure,FormControl,FormLabel,Input } from '@chakra-ui/react'
import { Button, Textarea } from '@chakra-ui/react'

function CreatePost() {
    const disclosure = useDisclosure()
  
    const onSubmit = async (data) => {
      disclosure.onClose()
    }
  
    return (
      <>
        <Button marginTop="20rem" onClick={() => disclosure.onOpen()}>Create new post</Button>
  
        <FormDialog
          title="New post"
          defaultValues={{ title: "" }}
          {...disclosure}
          onSubmit={onSubmit}
        >
          <FormLayout>
                    <FormControl>
                      <FormLabel htmlFor="email">Title</FormLabel>
                      <Input onChange={(e)=>{e.preventDefault();setEmail(e.target.value)}} id="email" type="email" />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="email">Description</FormLabel>
                      <Textarea placeholder='Here is a sample placeholder' />
                    </FormControl>
                    <FormControl>
                      <FormLabel >Start Date</FormLabel>
                      <Input 
                        placeholder="Select Date and Time"
                        size="md"
                        type="datetime-local"
                        />
                    </FormControl>
          </FormLayout>
        </FormDialog>
      </>
    )
  }
  
  
  export default CreatePost