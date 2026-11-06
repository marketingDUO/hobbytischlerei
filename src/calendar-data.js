export function dateKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
export function previewEvents(year,month,courses){return courses.map((course,i)=>{const day=2+Math.floor(i/2)*3;return{id:`${year}-${month}-${course.id}`,course,day,date:dateKey(new Date(year,month,day)),time:i%2?'14:00':'10:00'}})}
export function eventLabel(e){return `${e.date.split('-').reverse().join('.')} · ${e.time} Uhr (Beispiel)`}
