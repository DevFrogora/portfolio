export class Project {
    constructor(id = null,  name = null, languages = null,
        applicationType = null, sourceLink = null, previewLink = null,
        summary=null,contributedBy=null,date = null) {
        this.id = id;
        this.name = name;
        this.languages = languages;
        this.applicationType = applicationType;
        this.sourceLink = sourceLink;
        this.previewLink = previewLink;
        this.summary = summary;
        this.contributedBy = contributedBy;
        this.date = date;
    }

}

