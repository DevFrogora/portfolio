export class Project {
    constructor(id = null, date = null, name = null, languages = null,
        applicationType = null, sourceLink = null, previewLink = null,
        contributedBy=null,summary=null) {
        this.id = id;
        this.name = name;
        this.languages = languages;
        this.applicationType = applicationType;
        this.sourceLink = sourceLink;
        this.previewLink = previewLink;
        this.date = date;
        this.contributedBy = contributedBy;
        this.summary = summary;
    }

}

