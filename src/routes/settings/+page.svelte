<section>
    <h1>Settings</h1>
    <p>Change various settings</p>
</section> 

<section id="appearance">
    <h2>Appearance</h2>
    <form method="POST" action="?/theme">
        <label for="theme">Theme</label>
        <select name="theme">
            <optgroup label="Default">
                <option value="dark-default">Dark Default</option>
                <option value="light-default">Light Default</option>
            </optgroup>
            <optgroup label="Legacy">
                <option value="choco">Choco</option>
            </optgroup>
        </select>
        <button type="submit">Save</button>
    </form>
</section>