import React, {useState, useEffect} from 'react';
import {singleFileUpload, multipleFilesUpload} from '../data/api';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const FileUploadScreen = (props) => {
    const [singleFile, setSingleFile] = useState('');
    const [singleFile1, setSingleFile1] = useState('');
    const [singleFile2, setSingleFile2] = useState('');
    const [singleFile3, setSingleFile3] = useState('');
    const [singleFile4, setSingleFile4] = useState('');
    const [multipleFiles, setMultipleFiles] = useState('');
    const [title, setTitle] =  useState('');
    const [singleProgress, setSingleProgress] = useState(0);
    const [multipleProgress, setMultipleProgress] = useState(0);
    const [singleProgress1, setSingleProgress1] = useState(0);
    const [singleProgress2, setSingleProgress2] = useState(0);
    const [singleProgress3, setSingleProgress3] = useState(0);
    const [singleProgress4, setSingleProgress4] = useState(0);
    const SingleFileChange = (e) => {
        setSingleFile(e.target.files[0]);
        setSingleProgress(0);
    }
    
    const SingleFileChange1 = (e) => {
        setSingleFile1(e.target.files[0]);
        setSingleProgress1(0);
    }
    
    const SingleFileChange2 = (e) => {
        setSingleFile2(e.target.files[0]);
        setSingleProgress2(0);
    }
    
    const SingleFileChange3 = (e) => {
        setSingleFile3(e.target.files[0]);
        setSingleProgress3(0);
    }
    
    const SingleFileChange4 = (e) => {
        setSingleFile4(e.target.files[0]);
        setSingleProgress4(0);
    }
    
    const MultipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
        setMultipleProgress(0);
    }
    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
        }
    }
    const mulitpleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setMultipleProgress(percentage);
        }
    }
    const uploadSingleFile = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        await singleFileUpload(formData, singleFileOptions);
        props.getsingle();
    }


    
    const uploadSingleFile1 = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        await singleFileUpload(formData, singleFileOptions);
        props.getsingle();
    }
    
    const uploadSingleFile2 = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        await singleFileUpload(formData, singleFileOptions);
        props.getsingle();
    }
    
    const uploadSingleFile3 = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        await singleFileUpload(formData, singleFileOptions);
        props.getsingle();
    }
    
    const uploadSingleFile4 = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        await singleFileUpload(formData, singleFileOptions);
        props.getsingle();
    }

    const UploadMultipleFiles = async () => {
        const formData = new FormData();
        formData.append('title', title);
        for (let i = 0; i < multipleFiles.length; i++) {
            formData.append('files', multipleFiles[i]);                      
        }
        await multipleFilesUpload(formData, mulitpleFileOptions);
        props.getMultiple();
    }
    return (
        <>
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Upload Adharcard</label>
                    <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile()} >Upload</button>
                    </div>
                    <div className="col-2">
                        <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                </div>
            </div>
           
        </div>
       
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Upload Pancard</label>
                    <input type="file" className="form-control" onChange={(e) => SingleFileChange1(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile1()} >Upload</button>
                    </div>
                    <div className="col-2">
                        <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress1 / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                </div>
            </div>
           
        </div>
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Upload Bank Passbook </label>
                    <input type="file" className="form-control" onChange={(e) => SingleFileChange2(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile2()} >Upload</button>
                    </div>
                    <div className="col-2">
                        <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress2 / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                </div>
            </div>
           
        </div>
        
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Upload Passport Size Photograph Of The Applicant</label>
                    <input type="file" className="form-control" onChange={(e) => SingleFileChange3(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile3()} >Upload</button>
                    </div>
                    <div className="col-2">
                        <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress3 / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                </div>
            </div>
           
        </div>
       
        
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Upload  10th Or 12th Pass Certificate</label>
                    <input type="file" className="form-control" onChange={(e) => SingleFileChange4(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={() => uploadSingleFile4()} >Upload</button>
                    </div>
                    <div className="col-2">
                        <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress4 / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                    </div>
                </div>
            </div>
           
        </div>
        </>  
        );
}

export default FileUploadScreen;