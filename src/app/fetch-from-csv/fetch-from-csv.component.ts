import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch-from-csv',
  templateUrl: './fetch-from-csv.component.html',
  styleUrls: ['./fetch-from-csv.component.css']
})
export class FetchFromCsvComponent implements OnInit {

  constructor() { }

  idsG:string[] = [];
  lines:string[] = [];
  rows = [];

  read() {
    
  }

  fileUpload(files) {
    if (files && files.length > 0) {
        const file: File = files.item(0);
        const reader: FileReader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
            const res = reader.result as string; // This variable contains your file as text
            const lines = res.split('\n'); // Splits you file into lines
            const ids = [];
            lines.forEach((line) => {
              const a = line.split(',')[0];
              if(ids.indexOf(a) == -1) {
                ids.push(a); // Get first item of line
                this.rows.push(line.split(','))
              }


            });
            console.log(ids);
            this.idsG = ids;

            output: JSON;
          obj = 
            {
            "col1":{"Attribute1": "value1", "Attribute2": "value2", "Attribute3": "value3"},
            "col2":{"Attribute1": "value4", "Attribute2": "value5", "Attribute3": "value6"}, 
            "col3":{"Attribute1": "value7", "Attribute2": "value8", "Attribute3": "value9"} 
            };
            this.output = <JSON>this.obj;

        };

    }
}

  ngOnInit() {
  }

}