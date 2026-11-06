from pathlib import Path
import json,re
root=Path('dist')
assert (root/'index.html').is_file()
assert (root/'kurse/index.html').is_file()
for asset in re.findall(r'(?:src|href)="(/assets/[^"?#]+)',(root/'index.html').read_text()):
    assert (root/asset.lstrip('/')).is_file(),asset
courses=json.loads(Path('courses.json').read_text())
assert len(courses)==15
for course in courses:
    assert (root/course['image'].lstrip('/')).is_file(),course['name']
assert 'Beispiel' in Path('src/CourseCalendar.jsx').read_text()
print('Startseite, Kursseite, 15 Kurse und statische Assets geprüft.')
