import { useRef } from 'react'
import 'flowbite'
import './App.css'

function App() {

  const uploadedPicture = useRef(null);

  const uploadHandler = () => {

  }
  return (
    <>
    <div className='flex flex-col gap-[100px] justify-center items-center'>
      <h1 className='font-Raleway text-6xl font-semibold'> Face Emotion Detection</h1>
      
      <div className="flex flex-col gap-[25px] items-center justify-center w-full">
      <button id="dropdownHelperRadioButton" data-dropdown-toggle="dropdownHelperRadio" className="text-white font-Raleway bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Choose Model<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg></button>

      <div id="dropdownHelperRadio" className="z-10 hidden bg-white font-Raleway divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate3d(522.5px, 6119.5px, 0px)"}}>
        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperRadioButton">
          <li>
          <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <div className="flex items-center h-5">
                <input id="helper-radio-4" name="helper-radio" type="radio" value="alexnet" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            </div>
              <div className="ms-2 items-start text-left text-sm">
                <label htmlFor="helper-radio-4" className="font-medium text-gray-900 dark:text-gray-300">
                  <div>AlexNet</div>
                  <p id="helper-radio-text-4" className="text-xs font-normal text-gray-500 dark:text-gray-300">51% Accuracy</p>
                </label>
          </div>
        </div>
      </li>
      <li>
        <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <div className="flex items-center h-5">
              <input id="helper-radio-5" name="helper-radio" type="radio" value="vggnet" defaultChecked={true} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
          </div>
          <div className="ms-2 items-start text-left text-sm">
              <label htmlFor="helper-radio-5" className="font-medium text-gray-900 dark:text-gray-300">
                <div>VGGNet13</div>
                <p id="helper-radio-text-5" className="text-xs font-normal text-gray-500 dark:text-gray-300">67% Accuracy</p>
              </label>
          </div>
        </div>
      </li>
            </ul>
        </div>
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6 font-Raleway">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" accept="image/png, image/jpeg"/>
      </label>
      <button type="button" className="text-gray-900 font-Raleway bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        Upload
      </button>
      </div> 
    </div>
    
    </>
  )
}

export default App
