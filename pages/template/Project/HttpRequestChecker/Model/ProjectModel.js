export class WeatherForecast {
    constructor(id = null, date = null, projectName = null, language = null,
        applicationType = null, sourceLink = null, previewLink = null) {
        this.id = id;
        this.projectName = projectName;
        this.language = language;
        this.applicationType = applicationType;
        this.sourceLink = sourceLink;
        this.previewLink = previewLink;
        this.date = date;
    }

}

