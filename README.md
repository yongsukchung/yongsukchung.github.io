# Research Lab

## Data
---
### 1. Publications
```json
[
    {
        "authors": "Authors",
        "year": 2022,
        "title": "Title 1",
        "journal": {
            "title": "Journal's title",
            "volume": "Volume",
            "issue": 8,
            "articleId": "Article Id",
            "pages": "Pages",
            "indexing": {
                "SCIE": true,
                "impactFactor": 3.752
            }
        }
    },
]
```
---
### 2. Media
- Megazine
```json
[
    {
        "title": "Title 1",
        "photoLink": "photolink1.jpg",
        "source": "Source 1",
        "megazineLink": "Megazine 1",
        "info": "Info 1"
    },
    {
        "title": "Title 2",
        "photoLink": "photolink2.jpg",
        "source": "Source 2",
        "megazineLink": "Megazine 2",
        "info": "Info 2"
    },
]
```
- Media, press, presentations
```json
[
    {
        "title": "Title 1",
        "date": "Date 1",
        "link": "Link 1"
    },
    {
        "title": "Title 2",
        "date": "Date 2",
        "link": "Link 2"
    }
]
```
---
### 3. Photos
```json
[
    {
        "title": "Title 1",
        "date": "Date 1",
        "src": "image1.jpg"
    }
]
```
---
### 4. Collaborators
```json
{
    "university": {
        "name": "University's name",
        "collaborators" : [
            {
                "name": "Name 1",
                "link": "Link 1",
                "field": "Field 1"
            }
            {
                "name": "Name2 ",
                "link": "Link 2",
                "field": "Field 2",
                "projects": [
                    {
                        "name": "Project 1",
                        "link": "Project 1's link"
                    },
                    {
                        "name": "Project 2",
                        "link": "Project 2's link"
                    },
                ]
            }
        ]
    },
    "external": {
        "name": "External",
        "collaborators" : [
            {
                "name": "Name",
                "link": "Link",
                "institution": {
                    "name": "Institution's name",
                    "link": "Institution's link"
                },
                "projects": [
                    {
                        "name": "Project 1",
                        "link": "Project 1's link"
                    },
                    {
                        "name": "Project 2",
                        "link": "Project 2's link"
                    },
                ]
            },
            {
                "name": "Name",
                "link": "Link",
                "institution": {
                    "name": "Institution's name",
                    "link": "Institution's link"
                },
            }
        ]
    }
}
```
### 5. Reseach
- Projects
```json
[
    {
        "name": "Name 1",
        "fundingAgency": "Funding Agency 1",
        "award": "Award 1",
        "principleInvestigator": "Principle Investigator 1",
        "coPrincileInvestigator": "Co-principle Investigator 1",
        "startDate": "Start Date 1",
        "endDate": "End Date 1",
        "description": "Description 1",
        "detailsLink": "Detail link"
    }
]
```