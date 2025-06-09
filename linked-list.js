function linkedList() {
    let headNode = null;
    let tailNode = null;

    function append(value) {
        const newNode = node(value)
        if (!headNode) {
            headNode = newNode
            tailNode = newNode
        } else {
            tailNode.nextNode = newNode
            tailNode = newNode
        }
    }
    function prepend(value) {
        const newNode = node(value, headNode)
        headNode = newNode
    }
    function size() {
        if (headNode === null) {
            return 0
        }
        let size = 1;
        let current = headNode;
        while (current.nextNode !== null) {
            current = current.nextNode;
            size++
        }
        return size
    }
    function head() {
        return headNode
    }
    function tail() {
        return tailNode
    }
    function at(index) {
        // 0 indexed
        let current = headNode;
        for (let i = 0; i < index; i++) {
            if (current.nextNode === null) {
                return null
            }
            current = current.nextNode
        }
        return current
    }
    function pop() {
        const size = size();
        if (size === 1) {
            head = null
            tail = null
        }
        let current = headNode;
        for (let i = 0; i < size - 2; i++) {
            current = current.nextNode
        }
        current.nextNode = null;
    }
    function contains(value) {
        let current = headNode;
        while (current.value !== value) {
            if (current.value === null || current.nextNode === null) return false
            current = current.nextNode
        }
        return true
    }
    function find(value) {
        let current = headNode;
        let index = 0;
        while (current.value !== value) {
            if (current.value === null) return null
            current = current.nextNode
            index++
        }
        return index
    }
    function toString() {
        let string = ``
        let current = headNode;
        while (current.nextNode !== null) {
            string += `( ${current.value} ) ->`
            current = current.nextNode
        }
        string += `( ${current.value} ) -> null`
        return string
    }
    function insertAt(value, index) {
        const newNode = node(value, at(index))
        const previousNode = at(index - 1)
        previousNode.nextNode = newNode
    }
    function removeAt(index) {
        const previousNode = at(index - 1);
        const nextNode = at(index + 1)
        previousNode.nextNode = nextNode
    }
    return {
        append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt
    }
}

function node(value = null, nextNode = null) {
    return {
        value,
        nextNode
    }
}

export default linkedList