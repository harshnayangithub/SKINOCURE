import { Button, Card, CardText, CardTitle, FormGroup, Input, InputGroup } from "reactstrap";
import * as React from "react";

export const FileUploadCard = (props: any) => (
  <Card body style={{ backgroundColor: '#f8f9fa', border: '1px solid #ced4da', borderRadius: '0.25rem' }}>
    <CardTitle style={{ color: '#212529', fontSize: '1.25rem', fontWeight: 'bold' }}>Upload a photo</CardTitle>
    <CardText>
      <small style={{ color: '#6c757d' }}>The photo should be cropped to the place of your potential skin disease</small>
    </CardText>
    <FormGroup>
      <div className="mb-1">
        <InputGroup>
          <Input
            onChange={props.onFileChange}
            id="uploadedFile"
            name="file"
            type="file"
            style={{ color: 'rgb(26, 118, 209)' }}
          />
          <Button type="submit" onClick={props.onFileUpload} style={{ backgroundColor: 'rgb(26, 118, 209)', color: '#fff', border: 'none' }}>Upload</Button>
        </InputGroup>
      </div>
      <small className="text-muted">Supported file extensions are: png, jpeg, jpg.</small>
    </FormGroup>
  </Card>
);
