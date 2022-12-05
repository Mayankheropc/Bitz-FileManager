const fse = require('fs-extra')
const path = require('path')
const os = require('os')

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customText = document.getElementById("custom-text");
const successText = document.getElementById("success-text")
let analyseBtn = document.getElementById("analyse-button");
var outputPath = path.join(os.homedir(), 'Bitz-FileManager');
// var outputPath = "D:\\Downloads\\Bitz-FileManager";

// output variables
{
    var outputPath_img = path.join(outputPath, 'My Images');
    var outputPath_icon = path.join(outputPath, 'My Icons');
    var outputPath_audio = path.join(outputPath, 'My Audios')
    var outputPath_video = path.join(outputPath, 'My Videos');
    var outputPath_doc = path.join(outputPath, 'My Documents');
    var outputPath_pdf = path.join(outputPath_doc, 'My PDFs');
    var outputPath_note = path.join(outputPath_doc, 'My Notes');
    var outputPath_word = path.join(outputPath_doc, 'Word files');
    var outputPath_excel = path.join(outputPath_doc, 'Excel files');
    var outputPath_ppt = path.join(outputPath_doc, 'My SpredSheets');
    var outputPath_otherdoc = path.join(outputPath_doc, 'Other Documents');
    var outputPath_programfiles = path.join(outputPath, 'Program Files');
    var outputPath_compresed = path.join(outputPath, 'Compresed Files');
    var outputPath_installable = path.join(outputPath, 'Installers');
    var outputPath_others = path.join(outputPath, 'Others');
}

customBtn.addEventListener("click", function () {
    realFileBtn.click();
});


realFileBtn.addEventListener("change", function () {
    if (realFileBtn.files.length > 1) {
        customText.innerHTML = realFileBtn.files.length + " files selected";
        analyseBtn.disabled = false;
        // successText.style.color = '#DDEBEC';
        successText.innerHTML = '';
    } else if (realFileBtn.files.length == 1) {
        customText.innerHTML = realFileBtn.files.length + " file selected";
        // customText.innerHTML = realFileBtn.files[0].path;
        analyseBtn.disabled = false;
        successText.innerHTML = '';
    }
    else {
        customText.innerHTML = "No Directory is selected."
        analyseBtn.disabled = true;
        successText.innerHTML = '';
    }
});

// printing the output path where files will be stored
document.getElementById('output-path').innerText = outputPath;

analyseBtn.addEventListener("click", e => {
    e.preventDefault();
    for (var i = 0; i < realFileBtn.files.length; i++) {
        original_path = realFileBtn.files[i].path;
        file_name = path.basename(original_path);
        file_extension = path.extname(file_name);
        // console.log('for file ' + (i+1) + ': \n File Name is: ' + file_name + '\n Extension is: ' + file_extension + '\n Original Path is: ' + original_path);

        // for files with no extension
        if (file_extension === '') {
            fse.move(original_path, (outputPath_others + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for Images
        else if (file_extension === '.png' || file_extension === '.jpg' || file_extension === '.svg' || file_extension === '.jpeg' || file_extension === '.webp' || file_extension === '.apng' || file_extension === '.avif' || file_extension === '.jfif' || file_extension === '.pjepg' || file_extension === '.pjp' || file_extension === '.bmp') {
            fse.move(original_path, (outputPath_img + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for Icons
        else if (file_extension === '.ico' || file_extension === '.icns') {
            fse.move(original_path, (outputPath_icon + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for Audios
        else if (file_extension === '.mp3' || file_extension === '.m4a' || file_extension === '.flac' || file_extension === '.wav' || file_extension === '.wma' || file_extension === '.aac' || file_extension === '.dif' || file_extension === '.aa' || file_extension === '.aax' || file_extension === '.m4b' || file_extension === '.m4p' || file_extension === '.mmf' || file_extension === '.msv' || file_extension === '.wma' || file_extension === '.wav' || file_extension === '.mpc') {
            fse.move(original_path, (outputPath_audio + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for Videos
        else if (file_extension === '.mp4' || file_extension === '.m4a' || file_extension === '.gif' || file_extension === '.f4v' || file_extension === '.m4b' || file_extension === '.mov' || file_extension === '.webm' || file_extension === '.flv' || file_extension === '.f4v' || file_extension === '.3g2' || file_extension === '.3gp' || file_extension === '.svi' || file_extension === '.m4v' || file_extension === '.amv' || file_extension === '.vob' || file_extension === '.mkv' || file_extension === '.mpeg') {
            fse.move(original_path, (outputPath_video + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for PDFs
        else if (file_extension === '.pdf') {
            fse.move(original_path, (outputPath_pdf + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for word files
        else if (file_extension === '.doc' || file_extension === '.docx') {
            fse.move(original_path, (outputPath_word + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for text files or notes
        else if (file_extension === '.txt' || file_extension === '.prn' || file_extension === '.dif' || file_extension === '.slk' || file_extension === '.wmf' || file_extension === '.emf' || file_extension === '.bmp' || file_extension === '.dif') {
            fse.move(original_path, (outputPath_note + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for excel files
        else if (file_extension === '.xls' || file_extension === '.xlsx' || file_extension === '.csv' || file_extension === '.xlsm' || file_extension === '.xlsb' || file_extension === '.xltx' || file_extension === '.xltm' || file_extension === '.xlt' || file_extension === '.xml' || file_extension === '.xlam' || file_extension === '.xla' || file_extension === '.xlw' || file_extension === '.xlr' ) {
            fse.move(original_path, (outputPath_excel + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for ppt files
        else if (file_extension === '.pptx' || file_extension === '.pptm' || file_extension === '.ppt' || file_extension === 'potm' || file_extension === '.pot' || file_extension === '.ppsx' || file_extension === '.ppsm' || file_extension === '.pps' || file_extension === '.ppam' || file_extension === '.ppa' || file_extension === '.odp' ) {
            fse.move(original_path, (outputPath_ppt + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for other documents
        else if (file_extension === '.odt' || file_extension === '.ods' || file_extension === '.xps' || file_extension === '.dbf' || file_extension === '.accdb' || file_extension === '.pub') {
            fse.move(original_path, (outputPath_otherdoc + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for c++ files
        else if (file_extension === '.cpp' || file_extension === '.c' ) {
            fse.move(original_path, (outputPath_programfiles + '\\C & C++\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for c sharp files
        else if (file_extension === '.cs' ) {
            fse.move(original_path, (outputPath_programfiles + '\\C# Files\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for python files
        else if (file_extension === '.py' || file_extension === '.pyc' || file_extension === '.ipynb' ) {
            fse.move(original_path, (outputPath_programfiles + '\\Python\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //MatLab files
        else if (file_extension === '.m' ) {
            fse.move(original_path, (outputPath_programfiles + '\\MatLab\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //Java files
        else if (file_extension === '.java' ) {
            fse.move(original_path, (outputPath_programfiles + '\\Java\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //JavaScript files
        else if (file_extension === '.js' || file_extension === '.json' ) {
            fse.move(original_path, (outputPath_programfiles + '\\Java Script\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for other program files
        else if (file_extension === '.html' || file_extension === '.htm' || file_extension === '.css' || file_extension === '.php' || file_extension === '.pl' || file_extension === '.xlm' || file_extension === '.cgi' || file_extension === '.dll') {
            fse.move(original_path, (outputPath_programfiles + '\\Others\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for compressed files
        else if (file_extension === '.zip' || file_extension === '.tar' || file_extension === '.gz' || file_extension === '.7z' || file_extension === '.mint' || file_extension === '.htmi' || file_extension === '.mpkg' || file_extension === '.tpsr' || file_extension === '.ice' || file_extension === '.rar' || file_extension === '.gzip' || file_extension === '.bzip' || file_extension === '.bzip2' || file_extension === '.sifz' || file_extension === '.tbz' || file_extension === '.b6z') {
            fse.move(original_path, (outputPath_compresed + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for installable files
        else if (file_extension === '.exe' || file_extension === '.msi' || file_extension === '.msm' || file_extension === '.msp' || file_extension === '.mst' || file_extension === '.idt' || file_extension === '.cub' || file_extension === '.pcp' || file_extension === '.bat' || file_extension === '.cmd' || file_extension === '.bin' || file_extension === '.com' || file_extension === '.cpl' || file_extension === '.job' || file_extension === '.paf' || file_extension === '.pif' || file_extension === '.ps1' || file_extension === '.res' || file_extension === '.scr' || file_extension === '.sct' || file_extension === '.vb' || file_extension === '.vbs' || file_extension === '.vbscript' || file_extension === '.ws' || file_extension === '.wsf' || file_extension === '.wsh') {
            fse.move(original_path, (outputPath_installable + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

        //for other files
        else {
            fse.move(original_path, (outputPath_others + '\\' + file_name), err => {
                if (err) return console.error(err)
                console.log('success!')
            })
        }

    }
    //for printing success after execution
    // successText.style.color = 'rgb(63 90 64)';
    successText.innerHTML = '**SUCCESS**'
})

























// var ipc = require("electron").ipcRenderer;

// const customBtn = document.getElementById("custom-button");

// customBtn.addEventListener("click", function(){
//     ipc.send('open-dialog-to-select-dir');
// })

// ipc.on('selected-dir', function(event,path){
//     console.log(path);
// })