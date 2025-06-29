using Moq;
using NUnit.Framework;
using CustomerCommLib;

namespace CustomerCommTests  // Changed namespace
{
    [TestFixture]
    public class CustomerCommTests
    {
        private Mock<IMailSender> _mailSenderMock;
        private CustomerCommLib.CustomerComm _customerComm;  // Fully qualified

        [OneTimeSetUp]
        public void Init()
        {
            _mailSenderMock = new Mock<IMailSender>();
            _mailSenderMock
                .Setup(m => m.SendMail(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(true);
            
            _customerComm = new CustomerCommLib.CustomerComm(_mailSenderMock.Object);
        }

        [Test]
        public void SendMailToCustomer_WhenCalled_ReturnsTrue()
        {
            bool result = _customerComm.SendMailToCustomer();
            Assert.IsTrue(result);
        }
    }
}
