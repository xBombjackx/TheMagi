from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    verify_homepage(page)
    browser.close()

def verify_homepage(page: Page):
    """
    This test verifies that the default Vite + React homepage loads correctly.
    """
    # 1. Arrange: Go to the homepage.
    page.goto("http://localhost:5173/")

    # 2. Assert: Check for a key element to ensure the page is loaded.
    # The default page has a heading with the text "Vite + React".
    heading = page.get_by_role("heading", name="Vite + React")
    expect(heading).to_be_visible()

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
