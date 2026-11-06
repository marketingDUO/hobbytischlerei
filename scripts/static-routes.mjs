import{mkdir,copyFile}from'node:fs/promises';await mkdir('dist/kurse',{recursive:true});await copyFile('dist/index.html','dist/kurse/index.html');
