export default class Images {
    images = []

    add(link) {
        this.images.push(link)
    }

    remove(link) {
        this.images.shift(link)
    }
}