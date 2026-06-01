class ApiResponse {
  constructor(message = 'Success', data = null) {
    this.success = true;
    this.message = message;
    this.data = data;
  }
}

module.exports = ApiResponse;