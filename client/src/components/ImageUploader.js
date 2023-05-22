import React from 'react';
import { Uploader } from 'uploader'; // Installed by "react-uploader".
import { UploadButton, UploadDropzone } from 'react-uploader';
import { Button } from '@mui/material';
import { Colors } from '../values/colors';

const uploader = Uploader({
  apiKey: 'free',
});
const options = { multi: true };

function ImageUploader() {
  return (
    <div>
      <UploadButton
        uploader={uploader}
        options={options}
        onComplete={(files) => alert(files.map((x) => x.fileUrl).join('\n'))}
      >
        {({ onClick }) => (
          <Button
            sx={{
              width: 200,
              height: '40px',
              color: Colors.white,
              fontSize: 13,
              alignSelf: 'flex-end',
              backgroundColor: Colors.secondaryLight,
              '&:hover': {
                backgroundColor: Colors.secondaryLight,
              },
            }}
            onClick={onClick}
          >
            Choose a Image
          </Button>
        )}
      </UploadButton>
    </div>
  );
}

export default ImageUploader;
