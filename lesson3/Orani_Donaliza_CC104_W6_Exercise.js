'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// PART A: STACK  (LIFO) — Based on lesson notes:
// push(), pop(), peek(), isEmpty(), size(), toString()
// updated for commit history

class Stack {
    constructor() {
        this.items = [];   // internal storage (Lesson: Stack uses array)
    }

    push(element) {
        this.items.push(element);   // add at top
    }

    pop() {
        return this.items.pop();    // remove top (LIFO)
    }

    peek() {
        return this.items[this.items.length - 1];  // read top
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    toString() {
        return this.items.toString();
    }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push required actions
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display outputs
console.log('Top Action:', actionHistory.peek());
console.log('Undo Action:', actionHistory.pop());
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());

// PART B: QUEUE (FIFO) — enqueue(), dequeue(), front()

class Queue {
    constructor() {
        this.items = [];   // internal storage (Lesson: Queue uses array)
    }

    enqueue(element) {
        this.items.push(element);   // add at back
    }

    dequeue() {
        return this.items.shift();  // remove from front
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    toString() {
        return this.items.toString();
    }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue required requests
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display outputs
console.log('Next Request:', waitingRequests.front());
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());


// PART C: PRIORITY QUEUE 
// smaller number = higher priority
// preserve arrival order for equal priorities


class PriorityQueue {
    constructor() {
        this.items = [];   // internal storage
    }

    enqueue(request, priority) {
        const newItem = { request, priority };
        let added = false;

        // Insert at correct position (Lesson: splice based on priority)
        for (let i = 0; i < this.items.length; i++) {
            if (newItem.priority < this.items[i].priority) {
                this.items.splice(i, 0, newItem);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(newItem); // equal or lower priority → end
        }
    }

    dequeue() {
        return this.items.shift();
    }

    size() {
        return this.items.length;
    }

    print() {
        this.items.forEach(item => {
            console.log(`${item.request}, Priority ${item.priority}`);
        });
    }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue required requests
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Initial priority order
console.log('Initial Priority Order:');
urgentRequests.print();

// Process first request
console.log('Processed Priority Request:', urgentRequests.dequeue().request);

// Remaining
console.log('Remaining Priority Requests:');
urgentRequests.print();


// PART D: LINKED LIST 
// append(), insert(), removeAt(), indexOf(), remove()

class Node {
    constructor(element) {
        this.element = element;   // store value
        this.next = null;         // next reference
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(element) {
        const node = new Node(element);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    insert(position, element) {
        if (position < 0 || position > this.length) return false;

        const node = new Node(element);
        let current = this.head;

        if (position === 0) {
            node.next = current;
            this.head = node;
        } else {
            let previous = null;
            let index = 0;

            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }

            node.next = current;
            previous.next = node;
        }

        this.length++;
        return true;
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) return null;

        let current = this.head;

        if (position === 0) {
            this.head = current.next;
        } else {
            let previous = null;
            let index = 0;

            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }

            previous.next = current.next;
        }

        this.length--;
        return current.element;
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current.element === element) return index;
            current = current.next;
            index++;
        }

        return -1;
    }

    remove(element) {
        return this.removeAt(this.indexOf(element));
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    toString() {
        let current = this.head;
        let result = '';

        while (current !== null) {
            result += current.element;
            result += current.next !== null ? ', ' : '';
            current = current.next;
        }

        return result;
    }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append required requests
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert Ticket #400 at position 0
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');

// Insert Ticket #405 at the end
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');

// Display complete list
console.log('Complete List:', completedRequests.toString());

// Search for Ticket #402
console.log('Index of Ticket#402:', completedRequests.indexOf('Ticket #402 - Printer Connected'));

// Remove at position 1
console.log('Removed at Position 1:', completedRequests.removeAt(1));

// Remove Ticket #403
console.log('Removed by Value:', completedRequests.remove('Ticket #403 - Antivirus Updated'));

// Final list + size
console.log('Final List:', completedRequests.toString());
console.log('Final Size:', completedRequests.size());
