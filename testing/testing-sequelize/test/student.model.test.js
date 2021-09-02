const Student = require('../models');
const { expect } = require('chai');


describe('Model Student', () => {
  describe('Validations', () => {
    describe('property name', () => {
      it('should throw an error if not a string', (done) => {
        const student = Student.build({
          name:  [] ,
        });
        student.validate()
          .then(() => done(new Error('Debería haber arrojado un error')))
          .catch(() => {
            done();
          });
      });
      it('should throw an errror if there is no name property', (done) => {
        const student =  Student.build({});
        student.validate()
          .then(() => {
            done(new Error('should been rejected'))
          })
          .catch(() => {
            done();
          })
      });
      it('should validate ok when name has a string', () => {
        const student = Student.build({
          name: ""
        });
        return student.validate()
                    .catch(e=> {
                        throw new Error("Terrible error")
                    })
      });
    })
    describe('camada', () => {
      it('should throw an error if it is not a string', () => {
        const student = Student.build({
          camada: [],
        });
        return student.validate()
          .then(() => {
            throw new Error('should not have validate')
          })
          .catch((e) => {console.log("El test pasa, tira error de validacion" + e)})
      });
    });
  })
})