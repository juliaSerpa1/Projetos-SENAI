import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteLogin {
	
	private WebDriver driver;
	
	@Before
	public void ConfigurarTeste() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\OI417405\\Documents\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		//driver.get("http://localhost:4200/login");
		driver.manage().window().maximize();
		driver.findElement(By.xpath("//*[@id=\"menu\"]/a[2]")).click();
		
	}
	
	@Test
	public void TesteLogin() {
		driver.findElement(By.id("email")).sendKeys("alunoOi@email.com");
		driver.findElement(By.id("senha")).sendKeys("senha123");
		driver.findElement(By.id("botao-enviar")).click();
	}
	
	@After
	public void EncerrarTeste() {
		
	}
}
